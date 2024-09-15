import React, { useState, useMemo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import Item from './Item';

// Debounce function to delay the search input processing
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  React.useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

const ItemList = () => {
  const { items, searchTerm } = useSelector((state) => state.items);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Debounce searchTerm to avoid unnecessary re-renders
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  // Filter items based on search term (title only)
  const filteredItems = useMemo(() => {
    if (!debouncedSearchTerm) return items; 
    return items.filter((item) =>
      item.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
    );
  }, [items, debouncedSearchTerm]);

  // Get items for the current page using usememo
  const currentItems = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredItems.slice(startIndex, endIndex);
  }, [filteredItems, currentPage]);

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  const handlePageChange = useCallback((pageNumber) => {
    setCurrentPage(pageNumber);
  }, []);

  return (
    <div>
      <ul className="item-list">
        {currentItems.length > 0 ? (
          currentItems.map((item) => (
            <Item key={item.id} item={item} />
          ))
        ) : (
          <li>No products found</li>
        )}
      </ul>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            disabled={currentPage === index + 1}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default React.memo(ItemList);


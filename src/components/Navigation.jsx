import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function Navigation({ authUser, signOut }) {
  // eslint-disable-next-line no-unused-vars
  const { id, photo, name } = authUser;
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [contextMenuOpen, setContextMenuOpen] = useState(false);

  // Close the context menu when clicking anywhere else
  useEffect(() => {
    const closeMenu = () => {
      setContextMenuOpen(false);
    };

    document.addEventListener('click', closeMenu);
    return () => {
      document.removeEventListener('click', closeMenu);
    };
  }, []);

  return (
    <header className="app-nav">
      <div className="app-nav-title">Forum Diskusi</div>
      <div
        className="app-nav-user"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        onKeyPress={() => setDropdownOpen(!dropdownOpen)}
        role="button"
        tabIndex={0}
      >
        <span role="img" aria-label="User">👤</span>
        {' '}
        <span
          onContextMenu={(e) => {
            e.preventDefault();
            setContextMenuOpen(true);
          }}
        >
          {name}
        </span>
        {' '}
        {dropdownOpen && (
          <ul className="dropdown-menu">
            <li
              onClick={signOut}
              onKeyPress={signOut}
              // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
              role="button"
              tabIndex={0}
            >
              Logout
            </li>
          </ul>
        )}
        {contextMenuOpen && (
          <div className="context-menu">
            <button type="button" onClick={signOut}>Logout</button>
          </div>
        )}
      </div>
    </header>
  );
}

const authUserShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
};

Navigation.propTypes = {
  authUser: PropTypes.shape(authUserShape).isRequired,
  signOut: PropTypes.func.isRequired,
};

export default Navigation;

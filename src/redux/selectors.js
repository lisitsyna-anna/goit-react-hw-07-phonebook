import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;

export const selectFilter = state => state.filter;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectVisibleContacts = createSelector(
  [selectFilter, selectContacts],
  (filter, contacts) => {
    const normalizeFilter = filter.trim().toLowerCase();

    return contacts.filter(contact =>
      contact.name.trim().toLowerCase().includes(normalizeFilter)
    );
  }
);

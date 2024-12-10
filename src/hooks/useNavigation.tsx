import { useContext } from 'react';
import { NavigationContext } from '../contexts/NavigationContext';

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
}
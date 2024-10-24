export function format2Letter(name?: string) {
    if (!name) {
      return '';
    }
  
    const initials = name
      .split(' ')
      .map(word => word.charAt(0).toUpperCase())
      .join('')
      .slice(0, 2);
  
    return initials;
  }
  
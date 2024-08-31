// date-utils.ts
export function convertirDate(dateStr: string | null): Date | null {
    if (dateStr === null || dateStr.trim() === '') {
      return null;
    }
  
    const mois: { [key: string]: string } = {
      janvier: 'January',
      février: 'February',
      mars: 'March',
      avril: 'April',
      mai: 'May',
      juin: 'June',
      juillet: 'July',
      août: 'August',
      septembre: 'September',
      octobre: 'October',
      novembre: 'November',
      décembre: 'December'
    };
  
    const [jour, moisFr, annee] = dateStr.split(' ');
  
    if (!mois[moisFr.toLowerCase()]) {
      throw new Error('Mois invalide');
    }
  
    const moisEn = mois[moisFr.toLowerCase()];
  
    return new Date(`${moisEn} ${jour}, ${annee}`);
  }
  
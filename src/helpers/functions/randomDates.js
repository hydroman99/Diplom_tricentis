export function generateRandomDate() {
    const start = new Date(2015, 0, 1); 
    const end = new Date(2024, 9, 31); 
    
    const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    
    return date.toISOString().split('T')[0];
}


export function addRandomDays(dateString) {
    const date = new Date(dateString);
    const randomDays = Math.floor(Math.random() * 30) + 1; // Случайное число от 1 до 30
    const newDate = new Date(date.getTime() + randomDays * 24 * 60 * 60 * 1000); // Добавляем дни
    
    // Приводим к формату гггг-мм-дд
    return newDate.toISOString().split('T')[0];
}

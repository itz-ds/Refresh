const transactions = [
    {category: 'Salary', type: 'income', amount: 25000},
    {category: 'Groceries', type: 'expense', amount: 4000},
    {category: 'Entertainment', type: 'expense', amount: 2000},
    {category: 'Freelance work', type: 'income', amount: 6000},
    {category: 'Fuel', type: 'expense', amount: 500},
    {category: 'Electric Bill', type: 'expense', amount: 2000},
    {category: 'Self Gift', type: 'expense', amount: 1999},
];

function render(items){
    const list = document.getElementById('list');
    const totalEL = document.getElementById('total');
    list.innerHTML = items
    .map((item)=> `<li>${item.category} - ${item.amount}</li>`)
    .join('');
    const total = items.reduce((sum, item)=> sum + item.amount, 0);
    totalEL.innerText = `Total: ${total}`;  
};

const allBtn = document.getElementById('allBtn');
const expenseBtn = document.getElementById('expenseBtn');

allBtn.addEventListener('click', () => {
    render(transactions);
});

expenseBtn.addEventListener('click', () =>{
    const expenseOnly = transactions.filter((transaction)=> transaction.type === 'expense');
    render(expenseOnly);
})

render(transactions);
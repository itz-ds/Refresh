const transactions = [
    {category: 'Salary', type: 'income', amount: 25000},
    {category: 'Groceries', type: 'expanse', amount: 4000},
    {category: 'Entertainment', type: 'expanse', amount: 2000},
    {category: 'Frelance work', type: 'income', amount: 6000},
    {category: 'Fuel', type: 'expanse', amount: 500},
    {category: 'Electric Bill', type: 'expanse', amount: 2000},
    {category: 'Self Gift', type: 'expanse', amount: 1999},
];

const withTax = transactions.map((transaction) => transaction.amount * 1.18);

console.log('With Tax =',withTax);


const above2000 = transactions.filter((transaction)=>transaction.amount>=2000);

console.log('Above 2000 =', above2000);

const totalVal = transactions.reduce((total, transaction)=>transaction.amount + total ,0)

const upperCaseTitles = transactions.map((transaction)=>({
    ...transaction,
    category: transaction.category.toUpperCase()

}));

console.log('Titles With Upper Case =',upperCaseTitles);


const ex2EvenNumbers = transactions.filter((transaction)=>transaction.amount % 2 === 0);

const largestNumber = transactions.reduce((lNumber, transaction)=> transaction.amount>lNumber?transaction.amount:lNumber,0);

console.log('Largest number =', largestNumber);


const totalExpanse = transactions.filter((transaction)=>transaction.type === 'expanse').reduce((total, transaction)=>total+transaction.amount,0);

console.log('total expanse =',totalExpanse);

const totalIncome = transactions.filter((transaction)=>transaction.type === 'income').reduce((total, transaction)=>total+transaction.amount,0);

console.log('total income =',totalIncome);

const balance = totalIncome - totalExpanse;

console.log(balance);








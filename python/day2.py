transactions = [
    {'category': 'Salary', 'type': 'income', 'amount': 25000},
    {'category': 'Groceries', 'type': 'expense', 'amount': 4000},
    {'category': 'Entertainment', 'type': 'expense', 'amount': 2000},
    {'category': 'Freelance work', 'type': 'income', 'amount': 6000},
    {'category': 'Fuel', 'type': 'expense', 'amount': 500},
    {'category': 'Electric Bill', 'type': 'expense', 'amount': 2000},
    {'category': 'Self Gift', 'type': 'expense', 'amount': 1999},
]

with_tax = [round(t['amount']*1.18,2) for t in transactions]
print(with_tax)
transactions_mt2000 = [transaction for transaction in transactions if transaction['amount'] >= 2000]
print(transactions_mt2000)
expense_only = [t['category'] for t in transactions if t['type']=='expense']
print(expense_only)
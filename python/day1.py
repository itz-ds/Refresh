import copy

numbers = [1,2,3,4,5,6,7,8,9,10]
names = ['lee', 'jin', 'sakai', 'kratos']

squared_numbers = [n*n for n in numbers]
even_numbers = [n for n in numbers if n%2 == 0]
uppercased_names = [n.upper() for n in names if len(n) > 3]

print(squared_numbers)
print(even_numbers)
print(uppercased_names)


a = [[1, 2], [3, 4]]
b = a.copy()              # shallow copy
c = copy.deepcopy(a)      # deep copy
a[0][0] = 99
print(a)
print(b)
print(c)
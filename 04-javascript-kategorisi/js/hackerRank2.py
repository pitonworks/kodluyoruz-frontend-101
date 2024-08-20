def getLetter(s):
    first_char = s[0]
    
    if first_char in 'aeiou':
        return 'A'
    elif first_char in 'bcdfg':
        return 'B'
    elif first_char in 'hjklm':
        return 'C'
    else:
        return 'D'

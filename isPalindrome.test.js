import isPalindrome from './isPalindrome'

test ('"A" is palindrome', () => {
  expect(isPalindrome('A')).toBe(true)
})

test ('"AB" is not palindrome', () => {
  expect(isPalindrome('AB')).toBe(false)
})
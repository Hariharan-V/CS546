// Head Tests
try {
   // Should Pass
   const headOne = head([2, 3, 4]);
   console.log('head passed successfully');
} catch (e) {
   console.error('head failed test case');
}
try {
   // Should Fail
   const headTwo = head(1234);
   console.error('head did not error');
} catch (e) {
   console.log('head failed successfully');
}

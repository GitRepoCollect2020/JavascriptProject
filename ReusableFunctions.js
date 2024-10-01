export function isPrime(num) {
    if (num <= 1) return false; // Numbers less than or equal to 1 are not prime
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false; // If num is divisible by any number other than 1 and itself
        }
    }
    return true; // If no divisors were found, num is a prime number
}
export function EvenOrOdd (number) {
    if(number % 2 == 0) {
        return "EVEN!"
    }else {
        return "ODD!"
        }
  }


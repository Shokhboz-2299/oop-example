// class Parent {
// 	#private = 'secret'
// 	name = 'x'
// 	get getPrivate () {
// 		return this.#private
// 	}
// 	set setPrivate (value) {
// 		this.#private = value
// 	}
// 	sayHello () {
// 		return 'hello'
// 	}
// }

// class Child extends Parent{}

// let child = new Child()

// child.setPrivate = '10'

// console.log(child.getPrivate)

// class MyMath  {
// 	plus (a, b) {
// 		return a + b
// 	}
// }
// class Main {
// 	show (data) {
// 		return 'this is ' + data
// 	}
// }
// let x = new MyMath()
// Object.assign(Main.prototype, x)

// let main = new Main()
// console.log(main.plus(20, 30))

/*
	custom types
*/

class ArrayInt extends Array {
	constructor (...array) {
		for(let el of array) {
			if(!Number.isInteger(el)) {
				throw new Error('ArrayInt must only include integers!')
			}
		}
		super(...array)
	}

	push (...array) {
		for(let el of array) {
			if(!Number.isInteger(el)) {
				throw new Error('ArrayInt must only include integers!')
			}
		}
		super.push(...array)
	}
}

let numbers = new ArrayInt(10, 7)
numbers.push(10)
// console.log(numbers)


class Char extends String {
	constructor (str) {
		if(typeof str != 'string') {
			throw new TypeError("Char must be string!")
		}

		if(str.length > 1) {
			throw new SyntaxError("Invalid Char length!")
		}

		super (str)
	}
}

// let char = new Char(7)

// console.log(char)


let arr = [4, 5, 6, 8]

console.log(arr.at(-1))


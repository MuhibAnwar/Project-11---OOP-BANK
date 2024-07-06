console.log("Welcome to TypeScript Banking System");
console.log("-----------------------------------")



interface IBankAccount {
    credit(amount: number): void;
    debit(amount: number): void;
}

class BankAccount implements IBankAccount {
    accountBalance: number;

    constructor(accountBalance: number) {
        this.accountBalance = accountBalance;
    }

    public credit(amount: number) {
        if (amount > 0) {
            this.accountBalance += amount;
            console.log("CREDIT SUCCESSFULLY ADDED TO YOUR ACCOUNT. New balance: " + this.accountBalance);
        } else {
            console.log("CREDIT UNSUCCESSFUL");
        }
    }

    public debit(amount: number) {
        if (amount > 0 && amount <= this.accountBalance) {
            this.accountBalance -= amount;
            console.log("DEBIT SUCCESSFULLY SUBTRACTED FROM YOUR ACCOUNT. New balance: " + this.accountBalance);
        } else {
            console.log("DEBIT UNSUCCESSFUL");
        }
    }
}

class Customer {
    person: {
        firstName: string;
        lastName: string;
    };
    age: number;
    bankAccount: BankAccount;
    gender: string;
    phone: number;

    constructor(person: { firstName: string, lastName: string }, age: number, bankAccount: BankAccount, gender: string, phone: number) {
        this.person = person;
        this.age = age;
        this.bankAccount = bankAccount;
        this.gender = gender;
        this.phone = phone;
    }
    public display() {
        console.log("NAME :"+this.person.firstName+""+this.person.lastName);
        console.log("AGE :"+this.age);
        console.log("GENDER :"+this.gender);
        console.log("PHONE :"+this.phone);
        console.log("Balance in account :"+this.bankAccount.accountBalance);
        console.log()

    }

}

const a1 = new BankAccount(1000);
const c1 = new Customer ({firstName: "MUHIB", lastName: "ANWAR"}, 25, a1, "Male", 123456789);

c1.display()
c1.bankAccount.credit(500);
c1.bankAccount.debit(200);
console.log()

console.log("-------------------------")

const a2 = new BankAccount(10000);
const c2 = new Customer ({firstName: "ANAS", lastName: "ZULFIQAR"}, 25, a2, "Male", 123456789);

c2.display()
c2.bankAccount.credit(5000);
c2.bankAccount.debit(2000);
console.log()

console.log("Thank you for your visit"

)

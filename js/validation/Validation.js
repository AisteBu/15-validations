class Validation {
    isValidFirstName(firstName) {
        if (firstName === undefined ||
            typeof firstName !== 'string'||
            firstName.length < 2 ||
            !this.isUpperCase(firstName[0])) {
            return false;
        }
        return true;
    }

    isValidLastName(lastName) {
        if (lastName === undefined ||
            typeof lastName !== 'string'||
            lastName.length < 2 ||
            !this.isUpperCase(lastName[0])) {
            return false;
        }
        return true;
    }

    isValidEmail() {
        return true;
    }

    isValidMessage() {
        return true;
    }

    isValidPhoneNumber() {
        return true;
    }

    isValidMonthName() {
        return true;
    }

    isValidMonthName() {
        return true;
    }

    isValidWeekDayName() {
        return true;
    }

    isValidWeekDayName() {
        return true;
    }

    isValidPersonID() {
        return true;
    }

    isUpperCase(letter) {
        // if(letter === letter.toUpperCase()) {
        //     return true;
        // } else {
        //     return false;
        // }

        return letter === letter.toUpperCase();
    }
}


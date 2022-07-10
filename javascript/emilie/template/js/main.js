function checkAge (age) {
    if (age > 18) {
        return true;
} else {
    return confirm('did parents allow you?');
}
}
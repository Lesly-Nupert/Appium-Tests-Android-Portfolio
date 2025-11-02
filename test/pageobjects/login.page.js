/**
 * Login Page Object
 * Contains selectors and methods for interacting with the login page.
 */

class LoginPage {
    //===================================
    // SELECTORS
    // ==================================

    // Open Login form
    get loginForm() { return $('//android.view.View[@content-desc="Login"]/android.view.ViewGroup') };

    // Verify text "Login"
    get loginText() { return $('android=new UiSelector().className("android.widget.TextView").text("Login")') };

    // Get Email input field
    get emailInput() { return $('~input-email') };

    // Get Password input field
    get passwordInput() { return $('~input-password') };

    // Get Submit button login
    get submitButtonLogin() { return $('//android.view.ViewGroup[@content-desc="button-LOGIN"]/android.view.ViewGroup') };

    // POPUP ============================

    // Get Success title in popup after login
    get successTitle() { return $('android=new UiSelector().resourceId("android:id/alertTitle")') };

    // Get success message in popup after login
    get successMessage() { return $('android=new UiSelector().resourceId("android:id/message")') };

    // Get Ok button in popup after login
    get okButton() { return $('android=new UiSelector().resourceId("android:id/button1")') };

    // ERROR FIELDS MESSAGES ===========

    // Get error message for email field
    get emailErrorMessage() { return $('android=new UiSelector().text("Please enter a valid email address")') };

    // Get error message for password field
    get passwordErrorMessage() { return $('android=new UiSelector().text("Please enter at least 8 characters")') };

    //===================================
    // ACTIONS
    // ==================================

    // Open Login Form
    async openLoginFormAndClearFields() {
        await this.loginForm.waitForDisplayed();
        await this.loginForm.click();
        await this.loginText.waitForDisplayed();
        await this.emailInput.waitForDisplayed();
        await this.passwordInput.waitForDisplayed();
        await this.emailInput.clearValue();
        await this.passwordInput.clearValue();
    };

    // fill fields and submit login with valid and invalid data
    async fillFormLogin(email, password) {
        await this.emailInput.setValue(email);
        await this.passwordInput.setValue(password);
        await this.submitButtonLogin.click();
    };

    // Verify popup elements in success case
    async waitForSuccessPopup() {
        await this.successTitle.waitForDisplayed();
        await this.successMessage.waitForDisplayed();
        await this.okButton.waitForDisplayed();
    };

    // Verify errors message for each fiels with no valid data
    async waitForErrorMessage() {
        await this.emailErrorMessage.waitForDisplayed();
        await this.passwordErrorMessage.waitForDisplayed();
    };
};

// Export instance
module.exports = new LoginPage();
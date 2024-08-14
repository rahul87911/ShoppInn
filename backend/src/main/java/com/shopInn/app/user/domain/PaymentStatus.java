package com.shopInn.app.user.domain;

public class PaymentStatus {

	private String status;
    private String message;

    public PaymentStatus(String status, String message) {
        this.status = status;
        this.message = message;
    }

    // Getters and Setters

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}

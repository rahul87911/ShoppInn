package com.shopInn.app.user.domain;

public class PaymentMethod {
	private String method;
    private String description;

    public PaymentMethod(String method, String description) {
        this.method = method;
        this.description = description;
    }

    // Getters and Setters

    public String getMethod() {
        return method;
    }

    public void setMethod(String method) {
        this.method = method;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}

package com.mohit.foodappbackend;

import java.util.List;

public class Restaurant {
    private String name;
    private List<String> cuisines;
    private double stars;
    private int ETA;
    private String imageUrl;
    private List<MenuItem> menuItems;

    public Restaurant(String name, List<String> cuisines, double stars, int ETA, String imageUrl,List<MenuItem> menuItems) {
        this.name = name;
        this.cuisines = cuisines;
        this.stars = stars;
        this.ETA = ETA;
        this.imageUrl = imageUrl;
        this.menuItems = menuItems;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<String> getCuisines() {
        return cuisines;
    }

    public void setCuisines(List<String> cuisines) {
        this.cuisines = cuisines;
    }

    public double getStars() {
        return stars;
    }

    public void setStars(double stars) {
        this.stars = stars;
    }

    public int getETA() {
        return ETA;
    }

    public void setETA(int ETA) {
        this.ETA = ETA;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public List<MenuItem> getMenuItems() {
        return menuItems;
    }

    public void setMenuItems(List<MenuItem> menuItems) {
        this.menuItems = menuItems;
    }
}

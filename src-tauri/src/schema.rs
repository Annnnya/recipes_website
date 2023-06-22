// @generated automatically by Diesel CLI.

diesel::table! {
    users (email) {
        email -> Varchar,
        username -> Varchar,
        password -> Varchar,
        spoonacular_password -> Varchar,
        hash -> Varchar,
    }
}

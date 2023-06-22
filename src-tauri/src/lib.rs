use diesel::pg::PgConnection;
use diesel::prelude::*;
use dotenvy::dotenv;
use std::env;

pub mod models;
pub mod schema;

pub fn establish_connection() -> PgConnection {
    dotenv().ok();

    let database_url = env::var("DATABASE_URL").expect("DATABASE_URL must be set");
    PgConnection::establish(&database_url)
        .unwrap_or_else(|_| panic!("Error connecting to {}", database_url))
}

use self::models::{NewUser, User};

pub fn create_user(
    conn: &mut PgConnection,
    email: &str,
    username: &str,
    password: &str,
    spoonacular_password: &str,
    hash: &str,
) -> User {
    use crate::schema::users;

    let new_post = NewUser {
        email: email,
        username: username,
        password: password,
        spoonacular_password: spoonacular_password,
        hash: hash,
    };

    diesel::insert_into(users::table)
        .values(&new_post)
        .returning(User::as_returning())
        .get_result(conn)
        .expect("Error saving new user")
}

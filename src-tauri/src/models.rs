use diesel::prelude::*;
use crate::schema::users;

#[derive(Queryable, Selectable)]
#[diesel(table_name = crate::schema::users)]
#[diesel(check_for_backend(diesel::pg::Pg))]
pub struct User {
    pub email: String,
    pub username: String,
    pub password: String,
	pub spoonacular_password: String,
    pub hash: String,
}

#[derive(Insertable)]
#[diesel(table_name = users)]
pub struct NewUser<'a> {
	pub email: &'a str,
    pub username: &'a str,
    pub password: &'a str,
	pub spoonacular_password: &'a str,
    pub hash: &'a str,
}
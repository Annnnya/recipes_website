// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize)]
struct MyData {
    name: String,
    age: u32,
    // Add other fields as needed
}

#[tauri::command]
fn get_data_from_rust() -> serde_json::Value {
    let data = MyData {
        name: "John".to_string(),
        age: 25,
    };

    serde_json::to_value(data).expect("Failed to serialize data")
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![get_data_from_rust])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

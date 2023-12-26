use std::io::{stdin};

fn main() {
    let mut input = String::new();
    stdin().read_line(&mut input).unwrap();

    print!("{}??!", input.trim());
}
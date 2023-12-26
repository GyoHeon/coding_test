use std::io::{stdin};

fn main() {
    let mut input = String::new();
    stdin().read_line(&mut input).unwrap();

    let mut num = input.trim().parse::<i32>().unwrap();
    num -= 543;

    print!("{}", num);
}
use std::io::{stdin};

fn main() {
    let mut input = String::new();
    stdin().read_line(&mut input).unwrap();

    let arr = input.trim().split(' ');

    let mut sum = 0;

    for i in arr {
        sum += i.parse::<i64>().unwrap();
    }
    print!("{}", sum);
}
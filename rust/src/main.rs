// Pass by reference Tutorial

struct Object {
    value: i32
}

// Mutate functions
fn mutate_obj(obj: &mut Object) -> () {
    obj.value = 20;
}

fn mutate_var(value: &mut i32) -> () {
    // Dereference pointer to assign new value to var
    *value = 20;
}

fn main() -> () {
    // Declared and initalized data
    let mut value = 5;
    let mut obj = Object {
        value: 10
    };

    // Print data
    println!("value {}", value);
    println!("obj.value {}", obj.value);

    // mutate data
    mutate_obj(&mut obj);
    mutate_var(&mut value);

    // Print mutated data
    println!("value {}", value);
    println!("obj.value {}", obj.value);
}

use std::fs;
use std::io::BufReader;
use std::io::BufRead;
use fs::File;

fn main() {
  use std::time::Instant;
  let now = Instant::now();
  {
    // let data = fs::read_to_string("./updateCSV.csv").expect("Unable to read file");
    // println!("{}", data);
    fn read_file_line_by_line(filepath: &str) -> Result<(), Box<dyn std::error::Error>> {
      let file = File::open(filepath)?;
      let reader = BufReader::new(file);

      // for line in reader.lines() {
      //     println!("{}", line?);
      // }

      Ok(())
    }
    read_file_line_by_line("./updateCSV.csv");
  }
  let elapsed = now.elapsed();
  println!("Elapsed: {:.2?}", elapsed);
}

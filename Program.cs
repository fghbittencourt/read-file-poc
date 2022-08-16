using System.Diagnostics;

namespace Program
{
    class Program
    {
        static void Main(string[] args)
        {
            var watch = Stopwatch.StartNew();
            using (StreamReader reader = File.OpenText("bigCsvFile.csv"))
                while (!reader.EndOfStream)
                {
                    string line = reader.ReadLine();
                    if (null == line)
                        continue;
                    // do something with line
                    Console.WriteLine(line);
                }
            watch.Stop();

            Console.WriteLine("Milliseconds elapsed: {0:f3}", watch.ElapsedMilliseconds);
        }
    }
}
import time


def read_file():
  print("PYTHON! BORA!!")
  x = 1
  file = "bigCsvFile.csv"

  tic = time.perf_counter()
  f = open(file, mode='r', encoding='utf-8')
  for line in f.readlines():
    print(line, end="")
  f.close()

  toc = time.perf_counter()
  print(f"Total time {(toc - tic) * 1000:0.3f}ms")

read_file()

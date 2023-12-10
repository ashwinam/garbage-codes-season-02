# lets make decoratorator that count the how much time the function take to run

def tikTok(func):
    import time
    def wrapper():
        t1 = time.time()
        func()
        t2 = time.time() - t1
        print(f'{func.__name__} took {t2}seconds')
    return wrapper

@tikTok
def run_looop():
    lst = []
    for row in range(10000):
        lst.append(row)


run_looop()
#include <iostream>

using namespace std;

int main()
{
    int n = 5;
    int factorial = 1;

    while (n > 0)
    {
        factorial *= n;
        cout << "current factorial is  :  " << factorial << endl;
        n--;
    }

    cout << "factorial of 5 is : " << factorial << endl;
    return 0;
}

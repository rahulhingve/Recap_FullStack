#include <iostream>

using namespace std;

int main()
{
    char grade;
    int marks;

    cout << "Welcome to Grade Checker " << endl;
    cout << "Please Enter Your Marks : ";

    cin >> marks;

    if (marks <= 32)
    {
        grade = 'F';
    }
    else if (marks <= 45)
    {
        grade = 'C';
    }
    else if (marks <= 65)
    {
        grade = 'B';
    }
    else 
    {
        grade = 'A';
    }

    if (marks >= 0 && marks <= 100)
    {
        cout << "Your Grade for Marks " << marks << " is : " << grade <<endl;
        main();
    }
    else
    {
        cout << "You have enter wrong percentage marks "<<endl;
        main();
    }
    return 0;
}
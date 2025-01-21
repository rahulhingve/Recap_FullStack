#include <iostream>
using namespace std;


int main (){
    int age ;
    cout << "Enter Your Age to Check you can drive or not : ";
    cin >> age;

    if (age>=18){
        cout << "Yes' , You can Drive!";

    }else{
        cout << "Sorry Yor are not legal to drive";
    }

}
import java.util.InputMismatchException;
import java.util.Scanner;

public class Test1 {

	public static void main(String[] args) {
		try {
			System.out.println("一つ目の値を入力してください");
			Scanner scan1 = new Scanner(System.in);
			int num1 = scan1.nextInt();
			scan1.close();
			
	        System.out.println("二つ目の値を入力してください");
			Scanner scan2 = new Scanner(System.in);
	        int num2 = scan2.nextInt();
			scan2.close();
	        
	        int total = num1 + num2;
	        int average = (num1 + num2)/2;
	        
	        System.out.println("<実行結果>");
	        System.out.println("合計 : " + total);
	        System.out.println("平均 : " + average);
			
		}catch(InputMismatchException e) {
            System.out.println("整数で入力してください");        	
        }
	}
}

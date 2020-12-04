import java.util.InputMismatchException;
import java.util.Scanner;


public class Test2 {

	public static void main(String[] args) {
		try {
			System.out.println("身長(m)を入力してください");
			Scanner scan1 = new Scanner(System.in);
			double height = scan1.nextDouble();
			scan1.close();
			if (height >= 48.7) {
				// 48.7 : 出生時の平均身長(女児)
				// 入力値が 48.7 より大きい場合は cm で入力されたと判定し m に修正
				height = height / 100.0;
			}
			
			System.out.println("体重(kg)を入力してください");
			Scanner scan2 = new Scanner(System.in);
			double weight = scan2.nextDouble();
			scan2.close();
			
			double bmi = weight / Math.pow(height, 2);
			String result;
			if(bmi < 18.5) {
				result = "やせ";
			}else if(bmi < 25) {
				result = "標準";
			}else if(bmi < 30) {
				result = "肥満";
			}else {
				result = "高度肥満";
			}
			
			System.out.println("あなたは" + result + "です。");
			
		}catch(InputMismatchException e) {
			System.out.println("数値で入力してください");
		}catch(ArithmeticException e){
			System.out.println("正しい値を入力してください");
		}
	}
}
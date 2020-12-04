public class Test3 {

	public static void main(String[] args) {
		
		// 借入金額
		double borrowing = 250000;
		// 返済金額
		int repayment = 30000;
		// 月
		int month = 0;
		
		while (borrowing > 0){
			month += 1;
			if(borrowing > repayment){
				borrowing = borrowing + (borrowing * 0.14 / 12);
				borrowing -= repayment;
				System.out.println(	month + "ヶ月目 : 返済額 = " + repayment + "円,残り" + borrowing + "円");
			}else{
				System.out.println(	month + "ヶ月目 : 返済額 = " + borrowing + "円,返済完了。");
				break;

			}
		}
	}
}
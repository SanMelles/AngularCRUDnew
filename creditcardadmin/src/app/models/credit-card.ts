export interface CreditCard {
    id: number;
    name: string;
    description: string;
    bankName: string;
    maxcredit: number;
    interestRate: number;
    active: boolean;
    recommendedScore: string;
    annualFee: number;
    termsAndConditions: string;
    createdDate: string;
    updatedDate: string;
}

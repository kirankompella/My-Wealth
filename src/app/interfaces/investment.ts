export interface Investment {
    InvestmentId: string;
    InvestmentAmount: number;
    InvestmentDate: Date;
    MaturityDate: Date;
    MaturityAmount?: number;
    InvestedBy: string;
    NominatedTo?: string;
    RateOfIntrest?: number;
    InvestmentType: string;
    IsMarketLineked: boolean;
}
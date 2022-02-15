import { getCurrencies } from "./getCurrencies";

describe('getCurrencies', () => {
    it ('it should include USD, GDP & EUR', () => {
        expect(getCurrencies()).toContain('EUR' && 'GDP' && 'USD');
    });
});
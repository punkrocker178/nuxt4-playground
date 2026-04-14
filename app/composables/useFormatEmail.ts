import type { DisplayStock } from '~/models/displayStock';

export function useFormatEmail() {
  const stocks = useState<DisplayStock[]>('stocks', () => []);
  console.log(stocks.value);
  function formatStockRow(stock: DisplayStock): string {
    const isPositive = stock.change >= 0;
    const changeColor = isPositive ? '#16a34a' : '#dc2626';
    const changeSign = isPositive ? '+' : '';
    const changePercentText = stock.changePercent !== undefined
      ? ` (${changeSign}${stock.changePercent.toFixed(2)}%)`
      : '';

    return `
      <tr style="border-bottom: 1px solid #e5e7eb;">
        <td style="padding: 12px 16px; font-weight: 600; font-size: 14px;">${stock.symbol}</td>
        <td style="padding: 12px 16px; text-align: right; font-size: 14px;">${stock.price.toLocaleString()}</td>
        <td style="padding: 12px 16px; text-align: right; font-size: 14px; color: ${changeColor};">
          ${changeSign}${stock.change.toLocaleString()}${changePercentText}
        </td>
        <td style="padding: 12px 16px; text-align: right; font-size: 13px; color: #6b7280;">${stock.date}</td>
      </tr>`;
  }

  function generateHtml(): string {
    const rows = stocks.value.map(formatStockRow).join('');
    const generatedAt = new Date().toLocaleString();

    return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Stock Market Update</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f9fafb; font-family: Arial, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f9fafb; padding: 32px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">

          <!-- Header -->
          <tr>
            <td style="background-color: #1e40af; padding: 24px 32px;">
              <h1 style="margin: 0; color: #ffffff; font-size: 22px;">Stock Market Update</h1>
              <p style="margin: 4px 0 0; color: #bfdbfe; font-size: 13px;">Generated on ${generatedAt}</p>
            </td>
          </tr>

          <!-- Table -->
          <tr>
            <td style="padding: 24px 32px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse;">
                <thead>
                  <tr style="background-color: #f3f4f6;">
                    <th style="padding: 10px 16px; text-align: left; font-size: 12px; color: #6b7280; text-transform: uppercase; letter-spacing: 0.05em;">Symbol</th>
                    <th style="padding: 10px 16px; text-align: right; font-size: 12px; color: #6b7280; text-transform: uppercase; letter-spacing: 0.05em;">Price</th>
                    <th style="padding: 10px 16px; text-align: right; font-size: 12px; color: #6b7280; text-transform: uppercase; letter-spacing: 0.05em;">Change</th>
                    <th style="padding: 10px 16px; text-align: right; font-size: 12px; color: #6b7280; text-transform: uppercase; letter-spacing: 0.05em;">Date</th>
                  </tr>
                </thead>
                <tbody>
                  ${rows}
                </tbody>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f9fafb; padding: 16px 32px; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0; font-size: 12px; color: #9ca3af; text-align: center;">
                This email was automatically generated. Do not reply.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
  }

  return { generateHtml };
}
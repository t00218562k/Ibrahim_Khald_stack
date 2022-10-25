const main = function(req, res)
{
    res.render('main',
    {
        title: 'main screen',
        transactions: [
        {
            transactionsName: 'Transaction 1',
            DateOfTransaction: '01/01/2020',
            Type: 'Needed',
            Price:  12,
            Saved: 0
        },
        {
            transactionsName: 'Transaction 2',
            DateOfTransaction: '01/01/2020',
            Type: 'Needed',
            Price:  12,
            Saved: 0
        },
        {
            transactionsName: 'Transaction 3',
            DateOfTransaction: '01/01/2020',
            Type: 'Needed',
            Price:  12,
            Saved: 0
        },
        {
            transactionsName: 'Transaction 4',
            DateOfTransaction: '01/01/2020',
            Type: 'Needed',
            Price:  12,
            Saved: 0
        }]
    });
};

module.exports = 
{
    main
};
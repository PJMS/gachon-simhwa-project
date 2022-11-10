
from flask import Flask, jsonify, render_template, request
from pandas import DataFrame, concat
from pandas_datareader import data as pdr
from xgboost import XGBRegressor

# basedir = os.path.abspath(os.path.dirname(__file__))
app = Flask(__name__,
            static_url_path='',
            static_folder='dist/portfolio',
            template_folder='dist/portfolio')


@app.route('/')
def indexhtml():
    return render_template('index.html')

# 주가 예측 기능에 사용


@app.route('/api/foresee', methods=['GET'])
def foresee():
    params = request.args
    jongmokCode = str(params.get("jongmokCode"))  # 종목코드.ks
    days_in = int(params.get("prevCount"))  # 사용하는 개수
    day_out = 1

    print(jongmokCode, days_in)

    event = pdr.get_data_yahoo(jongmokCode)
    event_close = event['Close']
    values = event_close.values

    df = DataFrame(values)
    raw = []

    for i in range(days_in, 0, -1):
        raw.append(df.shift(i))
    for i in range(0, day_out):
        raw.append(df.shift(-i))

    sum = concat(raw, axis=1)
    sum.dropna(inplace=True)

    train = sum.values
    train_X, train_y = train[:, :-1], train[:, -1]

    model = XGBRegressor(objective='reg:squarederror', n_estimators=80)
    model.fit(train_X, train_y)

    data_in = values[-(days_in):]
    result = model.predict([data_in])

    #print('Input : %s, Predicted : %.3f' %(data_in, result[0]))

    result = jsonify(
        lastPrice=str(data_in[-1]),
        estmPrice=str(result[0])
    )

    return result


if __name__ == '__main__':
    app.run(host="0.0.0.0", port=8080)

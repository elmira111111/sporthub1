import './PersonalInfo.css';

const PersonalInfo = () => {
  return (
    <div>
      <form>
        <div className="form-container">
          <div className="form-container-2">
            <h2 className="title">Персональная информация</h2>

            <div className="form-group">
              <input type="email" placeholder="dennis416@gmail.com" />
            </div>

            <div className="form-group">
              <input type="password" placeholder="***********************" />
            </div>

            <div className="form-group">
              <input type="password" placeholder="Подтвердите пароль" />
            </div>

            <div className="form-row">
              <div className="form-group2">
                <label>Имя</label>
                <input type="text" className="inp" placeholder="Сабина" />
              </div>
              <div className="form-group2">
                <label>Фамилия</label>
                <input type="text" className="inp" placeholder="Бекенова" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group2">
                <label>Номер телефона</label>
                <div className="phone-wrapper">
                  <select>
                    <option value="+996">+996</option>
                    <option value="+7">+7</option>
                    <option value="+1">+1</option>
                    <option value="+90">+90</option>
                    <option value="+998">+998</option>
                  </select>
                  <input type="tel" placeholder="(770)66667788" />
                </div>
              </div>

              <div className="form-group2">
                <label>Дата рождения</label>
                <input type="date" className="inp" placeholder="Окт. 1, 2001" />
              </div>
            </div>

            <button type="submit" className="save-btn">Сохранить изменения</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PersonalInfo;

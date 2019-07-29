function Validation() {
    //Kiem Tra Rong
    this.KiemTraRong = function(idInput, idThongBao, noiDungTB) {
            var value = getEle(idInput).value;
            var isValid = true;
            if (value == "") {
                isValid = false;
                getEle(idThongBao).style.display = "block";
                getEle(idThongBao).innerHTML = noiDungTB;

            } else {
                getEle(idThongBao).innerHTML = "";
            }


            return isValid;
        }
        //Kiem tra Do Dai
        //     this.KiemTraDoDai = function(idInput, idThongBao, noiDungTB) {
        //         var value = getEle(idInput).value;
        //         var isValid = true;
        //         if (value.length < min || value.length > max) {
        //             isValid = false;
        //             getEle(idThongBao).style.display = "block";
        //             getEle(idThongBao).innerHTML = noiDungTB;

    //         } else {
    //             getEle(idThongBao).innerHTML = "";

    //         }
    //         return isValid;
    //     }
    // }

    //Kiem tra Ho Ten
    this.KiemTraKyTu = function(idInput, idThongBao, noiDungTB) {
            var value = getEle(idInput).value;
            var isValid = true;
            var pattern = new RegExp("^[a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
                "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
                "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$");
            if (!pattern.test(value)) {
                isValid = false;
                getEle(idThongBao).style.display = "block";
                getEle(idThongBao).innerHTML = noiDungTB;

            } else {
                getEle(idThongBao).innerHTML = "";

            }
            return isValid;
        }
        //Kiem tra Email
    this.KiemTraEmail = function(idInput, idThongBao, noiDungTB) {
            var value = getEle(idInput).value;
            var isValid = true;
            var pattern = new RegExp("^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@" +
                "[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$");
            if (!pattern.test(value)) {
                isValid = false;
                getEle(idThongBao).style.display = "block";
                getEle(idThongBao).innerHTML = noiDungTB;

            } else {
                getEle(idThongBao).innerHTML = "";

            }
            return isValid;
        }
        //Kiem tra Pass
    this.KiemTraPassword = function(idInput, idThongBao, noiDungTB) {
            var value = getEle(idInput).value;
            var isValid = true;
            var pattern = new RegExp("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\\S+$).{8,}$");
            if (!pattern.test(value)) {
                isValid = false;
                getEle(idThongBao).style.display = "block";
                getEle(idThongBao).innerHTML = noiDungTB;

            } else {
                getEle(idThongBao).innerHTML = "";

            }
            return isValid;
        }
        //Kiem tra chuc vu

    this.KiemTraChucVu = function() {
        var chucvuElm = getEle("chucvu");
        var isValid = true;
        if (chucvuElm.selectedIndex === 0) {
            isValid = false;
            getEle("tbChucVu").style.display = "block";
            getEle("tbChucVu").innerHTML = "(*) Vui lòng chọn chức vụ";

        } else {
            getEle("tbChucVu").innerHTML = "";

        }
        return isValid;
    }
}
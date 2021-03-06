//
//  PasswordReconfirmationTextFieldDelegate.swift
//  SignUpApp
//
//  Created by Cory Kim on 2020/03/27.
//  Copyright © 2020 corykim0829. All rights reserved.
//

import UIKit

class PasswordReconfirmationTextFieldDelegate: NSObject, UITextFieldDelegate {
    
    var signUpViewModel: SignUpViewModel?
    
    func textFieldDidChangeSelection(_ textField: UITextField) {
        let text = textField.text ?? ""
        signUpViewModel?.passwordReconfirmation = text
    }
}

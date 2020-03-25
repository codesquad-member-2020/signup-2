//
//  IDTextField.swift
//  SignUpApp
//
//  Created by Cory Kim on 2020/03/24.
//  Copyright © 2020 corykim0829. All rights reserved.
//

import UIKit

class IDTextField: SignUpTextField {
    
    let regex: String = "[a-z0-9_\\-]{5,20}"
    
    func textFieldDidChangeSelection(_ textField: UITextField) {
        let estimatedText = textField.text ?? ""
        isValid = checkValidation(text: estimatedText, regex: regex)
    }
}

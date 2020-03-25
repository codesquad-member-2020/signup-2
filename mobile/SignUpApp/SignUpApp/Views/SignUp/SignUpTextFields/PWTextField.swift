//
//  PWTextField.swift
//  SignUpApp
//
//  Created by Cory Kim on 2020/03/25.
//  Copyright © 2020 corykim0829. All rights reserved.
//

import UIKit

class PWTextField: SignUpTextField {
    
    static let ValidPWDidChangeNotification = NSNotification.Name("ValidPWDidChangeNotification")
    
    let regex: String = "(?=.*\\d{1,50})(?=.*[~`!@#$%\\^&*()-+=]{1,50})(?=.*[a-z]{1,50})(?=.*[A-Z]{1,50}).{8,16}$"
    
    func textFieldDidChangeSelection(_ textField: UITextField) {
        let estimatedText = textField.text ?? ""
        isValid = checkValidation(text: estimatedText, regex: regex)
        if isValid { NotificationCenter.default.post(name: Self.ValidPWDidChangeNotification,
                                                     object: nil,
                                                     userInfo: ["password": estimatedText]) }
    }
}

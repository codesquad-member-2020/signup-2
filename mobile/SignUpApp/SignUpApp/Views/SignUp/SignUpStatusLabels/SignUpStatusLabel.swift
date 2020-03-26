//
//  AlertLabel.swift
//  SignUpApp
//
//  Created by Cory Kim on 2020/03/24.
//  Copyright © 2020 corykim0829. All rights reserved.
//

import UIKit

class SignUpStatusLabel: UILabel {
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        configure()
    }
    
    required init?(coder: NSCoder) {
        super.init(coder: coder)
        configure()
    }
    
    private func configure() {
        text = ""
        baselineAdjustment = .none
    }
    
    func updateStatus(isValid: Bool, message: String) {
        text = message
        textColor = isValid ? SignUpTextField.CorrectAlertColor : SignUpTextField.WrongAlertColor
    }
}
